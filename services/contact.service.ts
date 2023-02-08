import http from "../lib/handler"

class ContactService {
    sendMail(data : Object): any {
        return http.post("/contact", JSON.stringify(data))
    }
}

export default new ContactService();