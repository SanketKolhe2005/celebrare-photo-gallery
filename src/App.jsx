
import {
  useCallback,
  useMemo,
  useReducer,
  useState,
} from 'react'
import useFetchPhotos from './hooks/useFetchPhotos'

function favouriteReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE': {
      const exists = state.includes(action.id)

      return exists
        ? state.filter((id) => id !== action.id)
        : [...state, action.id]
    }

    default:
      return state
  }
}

function getInitialFavourites() {
  try {
    const saved = localStorage.getItem('celebrare-favourites')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  const { photos, loading, error } = useFetchPhotos()
  const [search, setSearch] = useState('')

  const [favourites, dispatch] = useReducer(
    favouriteReducer,
    undefined,
    getInitialFavourites
  )

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    )
  }, [photos, search])

  function toggleFavourite(id) {
    dispatch({ type: 'TOGGLE', id })
  }

  // Save favourites whenever the list changes.
  // An initial effect is not needed: storage is updated
  // immediately in the click handler below instead.
  function handleFavouriteClick(id) {
    const updated = favourites.includes(id)
      ? favourites.filter((item) => item !== id)
      : [...favourites, id]

    dispatch({ type: 'TOGGLE', id })

    try {
      localStorage.setItem(
        'celebrare-favourites',
        JSON.stringify(updated)
      )
    } catch {
      console.error('Unable to save favourites')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Photo Gallery
          </h1>
          <p className="mt-2 text-gray-600">
            Discover beautiful photography from around the world.
          </p>
        </header>

        <div className="mx-auto mb-8 max-w-xl">
          <label
            htmlFor="photo-search"
            className="mb-2 block font-medium text-gray-700"
          >
            Search by author
          </label>

          <input
            id="photo-search"
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Enter an author name..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            All Photos
          </h2>
          <span className="text-sm text-gray-500">
            {favourites.length} favourites
          </span>
        </div>

        {loading && (
          <div className="flex flex-col items-center py-16">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
            <p className="mt-4 text-gray-600">
              Loading photos...
            </p>
          </div>
        )}

        {error && (
          <p role="alert" className="rounded-lg bg-red-100 p-4 text-red-700">
            {error}
          </p>
        )}

        {!loading && !error && filteredPhotos.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No photos found. Try another author name.
          </p>
        )}

        {!loading && !error && filteredPhotos.length > 0 && (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPhotos.map((photo) => {
              const isFavourite = favourites.includes(photo.id)

              return (
                <article
                  key={photo.id}
                  className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={`https://picsum.photos/id/${photo.id}/500/350`}
                    alt={`Photograph by ${photo.author}`}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />

                  <div className="flex items-center justify-between gap-3 p-4">
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-gray-800">
                        {photo.author}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Photo ID: {photo.id}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleFavouriteClick(photo.id)}
                      aria-label={
                        isFavourite
                          ? 'Remove from favourites'
                          : 'Add to favourites'
                      }
                      aria-pressed={isFavourite}
                      className={`rounded-full p-2 text-2xl transition hover:bg-gray-100 ${
                        isFavourite ? 'text-red-500' : 'text-gray-400'
                      }`}
                    >
                      {isFavourite ? '♥' : '♡'}
                    </button>
                  </div>
                </article>
              )
            })}
          </section>
        )}
      </div>
    </main>
  )
}
