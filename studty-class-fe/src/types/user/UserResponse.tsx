export type UserResponse = {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    avatarURL: string
    provider: string
    role: Array<string>
}