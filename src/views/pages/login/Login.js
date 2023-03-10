import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const host = window.location.host
  return (
    <div
      className="bg-light min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url('http://${host}/assets/crystal.jpeg')`,
        // backgroundSize: 'cover',
      }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1 style={{ textAlign: 'center' }}>KPI DASHBOARD</h1>
                    <p className="text-medium-emphasis" style={{ textAlign: 'center' }}>
                      Welcome, sign in
                    </p>
                    <br />
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={15}>
                        <Link to="/bank_options">
                          <CButton color="primary" className="px-4" style={{ width: '100%' }}>
                            Login
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                    <br />
                    <CCol style={{ textAlign: 'center' }}>
                      <CButton color="link" className="px-0" style={{ textDecoration: 'none' }}>
                        Forgot password?
                      </CButton>
                    </CCol>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Create an account, if you do not have an account already</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
