export type UserType = {
  code: number, 
  message : string,
  data : {
    isMember: boolean
  } 
}

export const getUserType = async (token: string | null | undefined): Promise<UserType> => {
  // 토큰 정보로 유저 정보 가져오기
  const response = await fetch('https://api.tteok-guk.store/api/member/check', {
    method: 'GET', // *GET, POST, PUT, DELETE 등
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })

  if (response) {
    if (response.status !== 200) {
      throw new Error('fail')
    }
  }

  return response.json()
}

// if (response.status === 200 && response.statusText === 'OK') {
//   try {
//     const res = await response.json()
//     return res;
//   } catch (jsonError) {
//     // Handle JSON parsing error
//     console.error('Error parsing JSON:', jsonError);
//     throw jsonError;
//   }
// } else {
//   throw new Error('Failed to fetch user type')
// }