'use client'

import { useEffect } from 'react'

export default function EasterEgg() {
  useEffect(() => {
    console.log(`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⣉⣤⣤⣴⣶⣶⣤⣤⣉⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠋⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡿⠋⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣤⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡟⢁⣾⣿⣿⣿⡟⢻⢹⢹⣛⣙⡏⠉⣿⣿⢙⣛⠛⣿⣿⣿⣿⣿⣦⠙⣿⣿⠛⣙⠛⢿⣿⣿⣿⣿⣿⡇⢸⡟⠓⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡿⢠⣿⣿⣿⣿⣿⣡⣘⢰⢸⣅⢆⡇⠄⣿⣯⠤⠤⠬⣽⣿⣿⣿⣿⣿⣷⡌⢿⠄⣽⠷⠄⢉⣉⣤⣤⣶⣶⣤⣤⣈⠛⠛⠛⠛⢿⣿⣿⣿⣿⣿⣿
⣿⠃⣼⣿⣿⣿⣿⣿⣿⣿⣾⣼⣿⣿⣷⣦⣿⣿⣿⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿⡈⣷⣤⢀⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠈⣿⣿⣿⣿⣿⣿
⣿⡄⣿⣿⣿⣿⣿⣿⣿⣿⣇⠶⢀⡇⣽⢡⣎⢻⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣧⢸⣿⣿⣿⠿⣿⣿⢿⣿⣿⣿⣿⣿⣆⠄⠐⢿⣿⣿⣿⣿⣿
⣿⣧⢸⣿⣿⣿⣿⣿⣿⣿⣿⠸⠖⠔⣿⣦⣵⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⠃⣾⣿⣿⣿⣶⣿⣷⣾⣿⣿⣿⣿⣿⣿⠄⠄⠄⣿⣿⣿⣿⣿
⣿⣿⡄⣿⣿⣿⡟⠿⢻⠻⣿⠟⣛⠻⣿⡟⣿⢻⢻⡿⣛⡛⢿⣿⣿⣿⣿⣿⡿⢀⣿⡀⣿⣿⣿⣿⣧⡐⣸⣿⣿⣿⣿⣿⣿⣿⠄⠄⠸⣿⣿⣿⣿⣿
⣿⣿⣷⠘⣿⣿⣧⠭⠼⢼⣿⣌⣛⣡⣿⣡⡱⢸⢸⣛⠐⠂⣛⣿⡙⣿⣿⡟⢁⣾⣿⣧⡈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⢸⣿⣿⣿⣿
⣿⣿⣿⣧⡘⣿⣿⣬⣭⣭⣷⣶⣶⣶⣾⣿⣿⣼⣼⣷⣬⣥⣿⣿⣷⡌⠋⣰⣿⣿⣿⣿⡏⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄⢼⣿⣿⣿⣿
⣿⣿⣿⣿⣷⡈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⣠⣦⣉⠛⠿⢿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⠄⠄⠙⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣦⣉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⣠⣴⣿⣿⣿⣿⣿⣶⣾⣿⣧⠸⡿⠿⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠠⠿⢿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣌⣉⣉⣉⣉⣁⣤⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⣿⣿⣿⣷⣶⡌⢻⣿⠿⢋⣤⡙⠻⣷⣄⠄⠄⠄⢹
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡤⠉⢉⠉⠁⡄⢠⣶⣿⣿⣿⣶⣌⣉⠛⠂⠄⠸
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣈⣁⣈⣉⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    `)
    console.log(
      '%c니떡국 내떡국의 🎨디자이너와 🖥️프론트엔드 개발자는 구직 중이에요!',
      'background:#007791; color:white; padding:3px; font-weight:700;',
    )
    console.log('니떡국 내떡국 개발 팀원들이 궁금하다면? https://bit.ly/team-tteokguk')
  }, [])

  return <></>
}