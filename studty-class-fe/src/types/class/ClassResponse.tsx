import { TestResponse } from "../test/TestResponse"
import { UserResponse } from "../user/UserResponse"

export type ClassResponse = {
    id: number
    name: string
    description: string
    code: string
    scope: string
    testList: Array<TestResponse>
    createUser: UserResponse
}