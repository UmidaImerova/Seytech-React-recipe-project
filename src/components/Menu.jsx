import React from 'react'
import { useState } from 'react'
import {Drawer, List, ListItem, ListItemText, Button} from '@mui/material'
import { Link } from 'react-router-dom'



function Menu() {
    const [drawerOpen, setDrawerOpen]= useState ('false')
  return (
    <>
    <Drawer open = {drawerOpen} onClose={()=>setDrawerOpen(false)}>
          <List>
              <ListItem>
                  <ListItemText>
                      <Link to="/">Home</Link>
                  </ListItemText>
              </ListItem>
              <ListItem>
                  <ListItemText>
                      Menu2
                  </ListItemText>
              </ListItem>
              <ListItem>
                  <ListItemText>
                      Menu3
                  </ListItemText>
              </ListItem>
          </List>
      </Drawer>
      <Button onClick={()=> setDrawerOpen(!drawerOpen)}>Show menu</Button>
      </>
  )
}

export default Menu