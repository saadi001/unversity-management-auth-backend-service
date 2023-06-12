import config from '../../../config/index'
import ApiError from '../../../errors/ApiErrors'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generatedUserId } from './users.utils'

const createUserFromDb = async (user: IUser): Promise<IUser | null> => {
  // auto generated id
  const id = await generatedUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)

  if (!createUserFromDb) {
    throw new ApiError(400, 'Failed to created User!')
  }

  return createdUser
}

export const UserService = {
  createUserFromDb,
}
