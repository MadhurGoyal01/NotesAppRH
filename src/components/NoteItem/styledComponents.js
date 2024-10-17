import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px;
  @media screen and (min-width: 768px) {
    width: 31%;
    min-width: 257px;
    margin: 0px 8px 24px 8px;
  }
`

export const TitleAndDeleteButtonCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  line-height: 1.33;
`

export const Note = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0;
  margin-top: 16px;
  line-height: 24px;
`

export const ActionButtonsCon = styled.div`
  display: flex;
  align-items: center;
`

// Optional individual styles for the icons (if you want specific styling):
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #334155;
  font-size: 24px;
  &:hover {
    color: #1e293b;
  }
`
