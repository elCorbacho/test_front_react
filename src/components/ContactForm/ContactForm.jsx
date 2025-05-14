import React, { useState } from 'react'
import './ContactForm.css'
import { Modal, Box, Typography } from '@mui/material'

export default function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  const handleOpen = (title, message) => {
    setModalTitle(title)
    setModalMessage(message)
    setModalOpen(true)
  }

  const handleClose = () => setModalOpen(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !email || !mensaje) {
      handleOpen('Error', 'Todos los campos son obligatorios')
    } else if (!email.includes('@')) {
      handleOpen('Error', 'Correo inválido')
    } else {
      handleOpen('Éxito', 'Mensaje enviado correctamente')
      setNombre('')
      setEmail('')
      setMensaje('')
    }
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgba(255, 255, 255, 0.54)',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.44)',
    color: '#000',
  }

  return (
    <div className="container my-5" id="contacto">
      <h3>Contáctanos</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea
            className="form-control"
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>

      {/* Modal de MUI con efecto glassmorphism */}
      <Modal
          open={modalOpen}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  disableScrollLock={true}  // ← Esto previene el movimiento de fondo
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {modalMessage}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
