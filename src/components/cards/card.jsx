import React from 'react'
import * as S from './courseCard.styles'
import { Link } from 'react-router-dom'

export const CourseCard = ({ name, openModal }) => {
  return (
    <S.courseCard $bgi={name}>
      <S.cardTitle>{name}</S.cardTitle>
      {openModal && (
        <S.cardBtn
          onClick={(e) => {
            e.stopPropagation()
            openModal(name)
          }}
        >
          Перейти →
        </S.cardBtn>
      )}
    </S.courseCard>
  )
}
