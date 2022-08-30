import { ROLES } from "../../../config";
class AuthenticationService{
    constructor(cookie) {
		this._cookie = cookie;
        
    }

     isLogin() {
        if (this._cookie) {
            return this._cookie.auth.token == ""? false : true
        }
        return false
        
    }
    isAdmin() {
        if (this._cookie) {
            return this._cookie.info.is_admin == 1? true : false
        }      
        return false
    }
    role() {
        if (this._cookie) {
            return this._cookie.info.is_admin == 1? ROLES.ADMIN : ROLES.USER
        }      
        return ROLES.USER
    }
	
}
export default AuthenticationService