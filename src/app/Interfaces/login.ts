export interface Login {
    login: Log,
    userPages: Pages
}
export interface Log {
    userId: number,
    userName: string,
    userEmail: string,
    userPass: string,
    userToken: string,
    userDateUpdate: Date
}
export interface Pages {
    userPages: string,
    pageName: string,
    pageIcon: string
}