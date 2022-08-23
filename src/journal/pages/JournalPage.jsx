import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vero sint voluptates optio fuga incidunt eius odio necessitatibus ratione ab, iusto possimus ex, nulla officia ipsum consequatur autem veritatis quam!</Typography> */}

      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}
