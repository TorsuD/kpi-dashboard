import React from 'react'
import Charts from 'src/views/charts/Charts'
import SubHeading from 'src/components/SubHeading'
import '../../../index.css'
import { CButton, CCardBody } from '@coreui/react'
import { CChartPie, CChartLine } from '@coreui/react-chartjs'
import { FiChevronUp } from 'react-icons/fi/index.esm'
import { BsArrowsAngleExpand } from 'react-icons/bs'

function TheBankScreen() {
  const random = () => Math.round(Math.random() * 100)
  return (
    <div>
      <div className="card-box-shadow">
        <SubHeading title="All Clients - Loan Clients Analysis" backgroundColor={'#03b1fc'} />

        <div>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Savers'],
                datasets: [
                  {
                    data: [100],
                    backgroundColor: ['#FF6384'],
                    hoverBackgroundColor: ['#FF6384'],
                  },
                ],
              }}
            />
          </CCardBody>
        </div>
        <br />

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>
          <CButton color="info" style={{ color: 'white' }}>
            Reports
          </CButton>
          <CButton color="info" style={{ color: 'white' }}>
            Branches
          </CButton>
          <CButton color="info" style={{ color: 'white' }}>
            Segments
          </CButton>
          <CButton color="info" style={{ color: 'white' }}>
            Top 40 Perf.
          </CButton>
        </div>

        <br />
        <br />

        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ flex: 0.3 }}>Current</div>
          <div style={{ flex: 0.3 }}>93.3k</div>
          <div style={{ flex: 0.3 }}>
            <FiChevronUp size={24} color={'green'} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ flex: 0.3 }}>Prev Week</div>
          <div style={{ flex: 0.3 }}>93.21k</div>
          <div style={{ flex: 0.3 }}></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
          <div style={{ flex: 0.3 }}>Previous Month</div>
          <div style={{ flex: 0.3 }}>92.98k</div>
          <div style={{ flex: 0.3 }}></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 11 }}>
          <div style={{ flex: 0.3 }}>Budget</div>
          <div style={{ flex: 0.3 }}>0</div>
          <div style={{ flex: 0.3 }}></div>
        </div>
      </div>

      <br />
      <br />

      <div className="card-box-shadow">
        <SubHeading
          title="Loan Balances"
          backgroundColor={'#03b1fc'}
          icon={<BsArrowsAngleExpand />}
        />

        <CCardBody>
          <CChartLine
            data={{
              labels: [
                '29-APR-22',
                '31-MAY-22',
                '29-JUN-22',
                '29-JUL-22',
                '31-AUG-22',
                'PIVOT DATE',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  borderColor: 'rgba(220, 220, 220, 1)',
                  pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                  pointBorderColor: '#fff',
                  data: [random(), random(), random(), random(), random(), random()],
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: 'rgba(151, 187, 205, 1)',
                  pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  pointBorderColor: '#fff',
                  data: [random(), random(), random(), random(), random(), random()],
                },
              ],
            }}
          />
        </CCardBody>

        <br />

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>
          <CButton color="info" style={{ color: 'white' }}>
            Reports
          </CButton>
          <CButton color="info" style={{ color: 'white' }}>
            Branches
          </CButton>
          <CButton color="info" style={{ color: 'white' }}>
            Segments
          </CButton>
          <CButton color="info" style={{ color: 'white' }}>
            Sectors
          </CButton>
          <CButton color="info" style={{ color: 'white' }}>
            Tops
          </CButton>
        </div>

        <br />
        <br />

        <SubHeading
          title="5 Day Trend"
          backgroundColor={'#03b1fc'}
          icon={<BsArrowsAngleExpand />}
        />

        <br />
        <br />
        <br />

        <div style={{ textAlign: 'center' }}>No data to display</div>
        <br />
        <br />
        <br />
      </div>

      <br />
      <br />

      <div className="card-box-shadow">
        <SubHeading
          title="Savers / Deposits Mobilized Trends"
          backgroundColor={'#03b1fc'}
          icon={<BsArrowsAngleExpand />}
        />
      </div>

      <br />
      <br />
      <br />

      <div className="card-box-shadow">
        <SubHeading
          title="Loan Disbursed Amount / Account"
          backgroundColor={'#03b1fc'}
          icon={<BsArrowsAngleExpand />}
        />

        <br />
        <br />

        <SubHeading
          title="5 Day Trend"
          backgroundColor={'#03b1fc'}
          icon={<BsArrowsAngleExpand />}
        />

        <br />
        <br />
        <br />

        <div style={{ textAlign: 'center' }}>No data to display</div>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default TheBankScreen
