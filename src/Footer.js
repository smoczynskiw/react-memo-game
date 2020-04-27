import React from 'react'
import { pics, faceDown } from './gamePics'
import footerStyles from './styles/footerStyles'

function Footer() {

  const { main, credits, containerMain, list, lastCredit, image, listItem } = footerStyles

  return (
    <div style={main}>
      <h3 style={credits}>Credits</h3>
      <div style={containerMain}>
        <div>
          <ul style={list}>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[0].image} />Photo by Mikey Wu on Unsplash</li>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[1].image} />Photo by FOODISM360 on Unsplash</li>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[2].image} />Photo by Jeff Kingma on Unsplash</li>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[3].image} />Photo by kalpesh patel on Unsplash</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: 'none', width: '100%' }}>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[4].image} />Photo by LuAnn Hunt on Unsplash</li>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[5].image} />Photo by Lukasz Szmigiel on Unsplash</li>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[6].image} />Photo by Ralf Skirr on Unsplash</li>
            <li style={listItem}><img alt='creditMiniature' style={image} src={pics[7].image} />Photo by Simon Matzinger on Unsplash</li>
          </ul>
        </div>
      </div>
      <p style={lastCredit}>
        <img alt='creditMiniature' style={image} src={faceDown} />
        Photo by Dulcey Lima on Unsplash
      </p>
    </div >
  )
}

export default Footer