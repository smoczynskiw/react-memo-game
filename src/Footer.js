import React from 'react'
import { pics, faceDown } from './gamePics'

function Footer() {

  const imageStyle = {
    width: '35px',
    height: '35px',
    marginRight: '10px',
  }

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    marginBottom: '10px'
  }

  return (
    <div style={{ fontSize: '15px', marginTop: '40px' }}>
      <h3 style={{ textAlign: 'center' }}>Credits</h3>
      <ul style={{ listStyle: 'none', width: '100%' }}>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[0].image} />Photo by Mikey Wu on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[1].image} />Photo by FOODISM360 on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[2].image} />Photo by Jeff Kingma on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[3].image} />Photo by kalpesh patel on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[4].image} />Photo by LuAnn Hunt on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[5].image} />Photo by Lukasz Szmigiel on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[6].image} />Photo by Ralf Skirr on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={pics[7].image} />Photo by Simon Matzinger on Unsplash</li>
        <li style={listItemStyle}><img alt='creditMiniature' style={imageStyle} src={faceDown} />Photo by Dulcey Lima on Unsplash</li>
      </ul>
    </div >
  )
}

export default Footer