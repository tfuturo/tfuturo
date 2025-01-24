import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Privacy from './Privacy'

const schema = yup
  .object({
    firstName: yup.string().required('Es necesario ingresar tu nombre'),
    lastName: yup.string().required('Es necesario ingresar tu apellido'),
    organization: yup.string(),
    phone: yup
      .string()
      .required('Es necesario ingresar un número de teléfono')
      .test(
        'valid-phone',
        'El número de teléfono no es válido',
        value => value && value.length >= 10 // Ensure the phone number is at least 10 digits
      ),
    email: yup
      .string()
      .email('Ingresa un email válido')
      .required('Es necesario ingresar un email'),
    message: yup.string().required('Escribe tu mensaje')
  })
  .required()

const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const form = useRef()
  const [phone, setPhone] = useState(null) // State for phone number

  const {
    register,
    handleSubmit,
    setValue, // Allows manual updates to the form state
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  const handleCloseModal = () => setShowModal(false)

  const whenSubmit = data => {
    const formData = { ...data, phone } // Include the phone number from state
    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: 'ZbCsu0DS45Vozgnve'
      })
      .then(
        () => {
          console.log('SUCCESS!', formData)
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )

    reset()
    setPhone(null) // Reset phone number
    setShowModal(true)
  }

  // Update the form's phone field whenever the phone state changes
  const handlePhoneChange = value => {
    setPhone(value)
    setValue('phone', value, { shouldValidate: true }) // Update form state and trigger validation
  }

  return (
    <div className='container-fluid bg-highlight-secondary align-content-center h-full py-5'>
      <div className='row mx-0 mt-5 mt-md-0 justify-content-center'>
        <div className='col-12 col-md-6'>
          {/* Botón de WhatsApp */}
          <div className='text-center mb-4'>
            <a
              href='https://wa.me/525513220746' // Replace with your WhatsApp number
              target='_blank'
              rel='noopener noreferrer'
              className='whatsapp-btn'
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '1000',
                backgroundColor: '#25d366',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                borderRadius: '50%',
                padding: '15px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: 'none',
                textDecoration: 'none'
              }}
            >
              <i className='bi bi-whatsapp'></i>
            </a>
          </div>

          {/* Formulario de contacto */}
          <h2 className='text-primary text-center fw-bold mb-3'>Contáctanos</h2>
          <div className='contact-container'>
            <form
              onSubmit={handleSubmit(whenSubmit)}
              ref={form}
              className='d-block'
              name='contact'
            >
              <div className='row'>
                <div className='d-flex flex-column fw-bold col-6'>
                  <label htmlFor='firstName'>Nombre</label>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='Tu nombre'
                    id='firstName'
                    {...register('firstName')}
                    className='my-2 p-2 border border-0'
                  />
                  <p
                    className='text-danger text-center'
                    style={{ minHeight: '1.5rem', margin: 0 }}
                  >
                    {errors.firstName?.message}
                  </p>
                </div>

                <div className='d-flex flex-column fw-bold col-6'>
                  <label htmlFor='lastName'>Apellido</label>
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Tu apellido'
                    id='lastName'
                    {...register('lastName')}
                    className='my-2 p-2 border border-0'
                  />
                  <p
                    className='text-danger text-center'
                    style={{ minHeight: '1.5rem', margin: 0 }}
                  >
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>

              <div className='d-flex flex-column fw-bold col-12'>
                <label htmlFor='organization'>
                  Empresa u organizacion (Opcional)
                </label>
                <input
                  type='text'
                  name='organization'
                  placeholder='Organización'
                  id='organization'
                  {...register('organization')}
                  className='my-2 p-2 border border-0'
                />
                <p
                  className='text-danger text-center'
                  style={{ minHeight: '1.5rem', margin: 0 }}
                >
                  {errors.organization?.message}
                </p>
              </div>

              <div className='d-flex flex-column fw-bold col-12'>
                <label htmlFor='email'>Correo</label>
                <input
                  type='text'
                  name='email'
                  placeholder='correo@mail.com'
                  id='email'
                  {...register('email')}
                  className='my-2 p-2 border border-0'
                />
                <p
                  className='text-danger text-center'
                  style={{ minHeight: '1.5rem', margin: 0 }}
                >
                  {errors.email?.message}
                </p>
              </div>

              <div className='d-flex flex-column fw-bold col-12'>
                <label htmlFor='phone'>Teléfono</label>
                <PhoneInput
                  international
                  defaultCountry='MX'
                  value={phone}
                  onChange={handlePhoneChange} // Call handler on change
                  className='my-2 p-2 border border-0'
                  placeholder='Ingresa tu número de teléfono'
                />
                <p
                  className='text-danger text-center'
                  style={{ minHeight: '1.5rem', margin: 0 }}
                >
                  {errors.phone?.message}
                </p>
              </div>

              <div className='d-flex flex-column fw-bold col-12'>
                <label htmlFor='message'>Mensaje</label>
                <textarea
                  name='message'
                  placeholder='Escribe tu mensaje'
                  id='message'
                  {...register('message')}
                  className='my-2 p-2 border border-0'
                  rows='3'
                />
                <p
                  className='text-danger text-center'
                  style={{ minHeight: '1.5rem', margin: 0 }}
                >
                  {errors.message?.message}
                </p>
              </div>

              <div className='text-center'>
                <button
                  type='submit'
                  className='btn btn-primary rounded-0 fw-bold my-3'
                >
                  Enviar
                </button>
              </div>
            </form>
            <Privacy />
          </div>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            className='align-self-center'
            centered
          >
            <Modal.Body className='rounded'>
              <h2 className='text-center'>Gracias por contactarnos</h2>
              <p className='text-center'>Nos comunicaremos pronto contigo</p>

              <div className='text-center mt-4'>
                <Button variant='dark' onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Contact
