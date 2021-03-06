import { APP_ID, MANAGE_API, API_URL } from '../../env.js'

const APP_API = MANAGE_API

exports.GETNEWS_URL = `${API_URL}/getNews`
exports.GETNEWS_FACULTY_URL = `${API_URL}/getNewsByFaculty`
exports.POST_ADD_FAVORITE_NEWS = `${API_URL}/addFavoriteNews`
exports.POST_DELETE_FAVORITE_NEWS = `${API_URL}/deleteFavoriteNews`
exports.POST_CHECK_FAVORITE_NEWS = `${API_URL}/checkFavoriteNews`
exports.GET_ALL_FAVORITE_NEWS = `${API_URL}/getAllFavoriteNews`
exports.GET_COUNT_FAVORITE = `${API_URL}/getFavoriteCount`


exports.GET_EVENT_URL = `${API_URL}/getEvent`
exports.POST_EVENT_JOINER = `${API_URL}/joinEvent`
exports.POST_EVENT_BY_COUPON = `${API_URL}/joinEventByCoupon`
exports.POST_CREATE_EVENT_COUPON = `${API_URL}/addEventCoupon`
exports.POST_CHECK_EVENT_AVAILABLE = `${API_URL}/eventAvailable`
exports.GET_JOINED_EVENT = `${API_URL}/getJoinedEvent`


exports.GET_DONATION = `${API_URL}/getDonation`

exports.GET_CAREER = `${API_URL}/getCareer`

exports.SIGNIN_URL = `${API_URL}/signin`
exports.SIGNIN_LDAP_URL = `${API_URL}/signinLdap`
exports.SIGNUP_URL = `${API_URL}/signup`
exports.GET_USER_DATA = `${API_URL}/getUserData`
exports.UPDATE_USER_DATA = `${API_URL}/updateUserData`

exports.POST_SEND_CHAT = `${API_URL}/pushChat`
exports.POST_FETCH_CHAT = `${API_URL}/fetchChat`

exports.GET_APP_DETAIL = `${APP_API}/api/searchAppById/${APP_ID}`