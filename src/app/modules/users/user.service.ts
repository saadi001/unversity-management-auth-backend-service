import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generatedUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated id
  const id = await generatedUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to created User!')
  }

  return createdUser
}

export default {
  createUser,
}
