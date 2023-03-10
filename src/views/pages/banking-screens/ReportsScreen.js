import React from 'react'
import { BsBank, BsSendCheck } from 'react-icons/bs'
import { GiMoneyStack } from '../../../../node_modules/react-icons/gi/index.esm'
import { TiArrowSyncOutline } from 'react-icons/ti'
import { GiReceiveMoney } from 'react-icons/gi'
import '../../../index.css'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CWidgetStatsB,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

function ReportsScreen() {
  return (
    <div>
      <div style={{ overflowX: 'scroll' }}>
        <CCol>
          <CCard className="mb-4">
            <CCardBody>
              {/* <DocsExample href="components/nav#pills-with-dropdowns"> */}
              <CNav variant="pills">
                <CNavItem>
                  <CNavLink href="#" active>
                    General Information
                  </CNavLink>
                </CNavItem>
                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary" style={{ color: '#21a8de' }}>
                    Operations
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary" style={{ zIndex: 99 }}>
                    Finance
                  </CDropdownToggle>
                  <CDropdownMenu style={{ zIndex: 99 }}>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary" style={{ color: '#21a8de' }}>
                    Channels
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary" style={{ color: '#21a8de' }}>
                    Treasury
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="nav-item">
                  <CDropdownToggle color="secondary" style={{ color: '#21a8de' }}>
                    Lending
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CNav>
              {/* </DocsExample> */}
            </CCardBody>
          </CCard>
        </CCol>
      </div>

      <br />

      <div
        style={{
          // display: 'flex',
          overflow: 'scroll',
          textAlign: 'center',
        }}
      >
        <CCol style={{}}>
          <CWidgetStatsB
            className="mb-4 w-72 h-72"
            color="info"
            inverse
            value={<BsSendCheck size={35} color={'white'} />}
            title="Operations"
          />
        </CCol>

        <CCol>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="success"
            inverse
            value={<GiMoneyStack size={35} color={'white'} />}
            title="Finance"
          />
        </CCol>

        <CCol>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="warning"
            inverse
            value={<TiArrowSyncOutline size={35} color={'white'} />}
            title="Channels"
          />
        </CCol>

        <CCol>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="danger"
            inverse
            value={<BsBank size={35} color={'white'} />}
            title="Treasury"
          />
        </CCol>

        <CCol>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="secondary"
            inverse
            value={<GiReceiveMoney size={35} color={'white'} />}
            title="Lending"
          />
        </CCol>
      </div>
    </div>
  )
}

export default ReportsScreen
