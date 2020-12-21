import React, {useRef, useEffect} from 'react'
import  styled  from 'styled-components'

const Item = ({items, numOwned, handleClick}) => {

  const numRef = useRef()

  useEffect(() => {
      numRef.current.children[0].focus()
  }, [])



  return (
    <ItemTypeWrapper ref={numRef}>
      {items.map((item)=> {
        return (
      <ItemContainer onClick={() => handleClick(item)}>    
        <div>
          <h1 style={{textAlign:'left'}}>{item.id}</h1>
          <p>{`Cost: ${item.cost} cookie(s). Produces ${item.value} cookies/second`}</p>
        </div>
        <NumberWrapper>
          {numOwned[item.id]}
        </NumberWrapper>
      </ItemContainer> 
      )
      })}
    </ItemTypeWrapper>
    
  )
}

const ItemContainer = styled.button`
  color: white;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const ItemTypeWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction:column;

`;

const NumberWrapper = styled.div`
  margin: 1rem 2rem;
  font-size: 3rem;
  font-weight: bold;
`;

export default Item
