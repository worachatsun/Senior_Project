let API_URL = 'http://localhost:3000/v1'

exports.GETNEWS_URL = `${API_URL}/getNews`
exports.GETNEWS_FACULTY_URL = `${API_URL}/getNewsByFaculty`
exports.POST_ADD_FAVORITE_NEWS = `${API_URL}/addFavoriteNews`
exports.POST_DELETE_FAVORITE_NEWS = `${API_URL}/deleteFavoriteNews`
exports.POST_CHECK_FAVORITE_NEWS = `${API_URL}/checkFavoriteNews`
exports.GET_ALL_FAVORITE_NEWS = `${API_URL}/getAllFavoriteNews`


exports.GET_EVENT_URL = `${API_URL}/getEvent`
exports.POST_EVENT_JOINER = `${API_URL}/joinEvent`