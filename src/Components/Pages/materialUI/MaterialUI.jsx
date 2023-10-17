
import { Button, TextField, Typography, Box, CssBaseline } from "@mui/material"

const MaterialUI = () => {
  return (
    <div>
        <Typography color={"secondary.secondary"} variant={"h2"}>Login/Registrarse</Typography>

        <TextField  label="Email" variant="outlined" />
        <Button variant="outlined" secondary={true}>Ingresar</Button>

        </div>
  )
}

export default MaterialUI