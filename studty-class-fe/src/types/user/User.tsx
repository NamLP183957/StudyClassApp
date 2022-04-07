export type User = {
    id: number
    firstName: string
    lastName: string
    password?: string
    activationCode: string
    avatarURL: string
    active: boolean
    provider: string
    role: string
}