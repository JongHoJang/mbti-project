import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        accessToken: '',
        avatar: null,
        nickname: '',
        success: false,
        userId: ''
      },
      loginUser: (data) =>
        set(() => ({
          user: {
            accessToken: data.accessToken,
            avatar: data.avatar,
            nickname: data.nickname,
            success: data.success,
            userId: data.userId
          }
        })),
      logoutUser: () =>
        set(() => ({
          user: {
            accessToken: '',
            avatar: null,
            nickname: '',
            success: false,
            userId: ''
          }
        })),
      changeNickname: (data) =>
        set((state) => ({
          user: {
            ...state.user,
            nickname: data.nickname
          }
        }))
    }),
    {
      name: 'user'
    }
  )
);

export default useUserStore;
