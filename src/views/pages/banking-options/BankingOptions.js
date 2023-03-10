import React from 'react'
import CardComponent from 'src/components/CardComponent'
import { BsBank, BsFillBarChartLineFill } from 'react-icons/bs'
import { FaUserCog } from '../../../../node_modules/react-icons/fa/index.esm'
import { TbReportSearch } from '../../../../node_modules/react-icons/tb/index.esm'
import { FiSettings } from 'react-icons/fi'
import { SiAmazoncloudwatch } from 'react-icons/si'
import { FiLogOut, FiMonitor } from '../../../../node_modules/react-icons/fi/index.esm'
import { Link } from 'react-router-dom'
import { CCol, CWidgetStatsB } from '@coreui/react'
import '../../../index.css'

function BankingOptions() {
  const host = window.location.host
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        height: '100vh',
        backgroundImage: `url('http://${host}/assets/crystal.jpeg')`,
        backgroundSize: 'cover',
      }}
    >
      <div style={{ display: 'flex' }}>
        {/*Left cards*/}
        <div>
          <div style={{ marginRight: '25px' }}>
            <Link to="/dashboard/thebank">
              <CWidgetStatsB
                className="mb-4 w-100 h-96 mr-2"
                color="primary"
                inverse
                value={<BsBank size={35} color={'white'} />}
                title="The Bank "
                // progress={{ value: 100 }}
                text="Analyze bank overview information"
              />
            </Link>
          </div>

          <div style={{ marginRight: '25px' }}>
            <Link to="/dashboard/financials">
              <CCol md={12} style={{ marginRight: '25px' }}>
                <CWidgetStatsB
                  className="mb-4 m w-100 h-96 "
                  color="success"
                  inverse
                  value={<BsFillBarChartLineFill size={35} color={'white'} />}
                  title="Financials"
                  // progress={{ value: 100 }}
                  text="Visually track, analyze display general information"
                />
              </CCol>
            </Link>
          </div>

          <div style={{ marginRight: '25px' }}>
            <Link to="/dashboard/reports">
              <CCol md={12}>
                <CWidgetStatsB
                  className="mb-4 m w-100 h-96 "
                  color="warning"
                  inverse
                  value={<TbReportSearch size={35} color={'white'} />}
                  title="Reports"
                  // progress={{ value: 100 }}
                  text="Track your banking business results and performance"
                />
              </CCol>
            </Link>
          </div>

          <div style={{ marginRight: '25px' }}>
            <Link to="/dashboard/system-configuration">
              <CCol md={12}>
                <CWidgetStatsB
                  className="mb-4 m w-100 h-96 "
                  color="secondary"
                  inverse
                  value={<FiSettings size={35} color={'white'} />}
                  title="System Configuration"
                  // progress={{ value: 100 }}
                  text="System setup and configuration"
                />
              </CCol>
            </Link>
          </div>
        </div>

        {/*Right cards*/}
        <div>
          <Link to="/dashboard/performance">
            <CCol md={12}>
              <CWidgetStatsB
                className="mb-4  w-100 h-96 ml-4"
                style={{ backgroundColor: '#eb8934' }}
                inverse
                value={<FaUserCog size={35} color={'white'} />}
                title="Performance"
                // progress={{ value: 100 }}
                text="RM performance, customer trends and pipelines"
              />
            </CCol>
          </Link>

          <Link to="/dashboard/data-mining">
            <CCol>
              <CWidgetStatsB
                className="mb-4 m w-100 h-96 "
                color="info"
                inverse
                value={<SiAmazoncloudwatch size={35} color={'white'} />}
                title="Data Mining"
                // progress={{ value: 100 }}
                text="Extract usable data for larger set of any raw data"
              />
            </CCol>
          </Link>

          <Link to="/dashboard/monitoring">
            <CCol>
              <CWidgetStatsB
                className="mb-4 m w-100 h-96 "
                style={{ backgroundColor: '#8b16a8' }}
                inverse
                value={<FiMonitor size={35} color={'white'} />}
                title="Monitoring, Risk and Compliance"
                // progress={{ value: 100 }}
                text="Monitoring, Risk and Compliance"
              />
            </CCol>
          </Link>

          <div style={{}}>
            <Link to="/login">
              <CCol>
                <CWidgetStatsB
                  className="mb-4 m w-100 h-96 "
                  color="danger"
                  inverse
                  value={<FiLogOut size={35} color={'white'} />}
                  title="Logout"
                  // progress={{ value: 100 }}
                  text="Log out of your account"
                />
              </CCol>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankingOptions
