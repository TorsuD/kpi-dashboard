import React from 'react'
import { CButton, CCardBody, CCol, CWidgetStatsB } from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import '../../../index.css'
import { FiBarChart, FiFile } from '../../../../node_modules/react-icons/fi/index.esm'
import SubHeading from 'src/components/SubHeading'

function FinancialsScreen() {
  return (
    <div>
      <h4>Finance Dashboard</h4>

      <div style={{ justifyContent: 'center' }}>
        <CCol style={{ marginRight: '10px' }}>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="primary"
            inverse
            value="Revenue"
            title="Monitor the bank's income "
            progress={{ value: 89.9 }}
            text={
              <div>
                <div>Actual: SLE 32,445,242</div>
                <div>Budget: SLE 132,445,242</div>
              </div>
            }
          />
        </CCol>
        <CCol>
          <CWidgetStatsB
            className="mb-4  w-100 h-96 "
            color="info"
            inverse
            value="Expenditure"
            title="Bank's Expenditure"
            progress={{ value: 89.9 }}
            text={
              <div>
                <div>Actual: SLE 32,445,242</div>
                <div>Budget: SLE 132,445,242</div>
              </div>
            }
          />
        </CCol>
      </div>

      <div style={{ justifyContent: 'center' }}>
        <CCol style={{ marginRight: '10px' }}>
          <CWidgetStatsB
            className="mb-4  w-100 h-96 "
            color="warning"
            inverse
            value="Ratios"
            title="Monitor key performance ratios"
            progress={{ value: 89.9 }}
            text={'Loan To Deposit Ratio: -29.5%'}
          />
        </CCol>
        <CCol>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="success"
            inverse
            value="Reports"
            title="Access all Financial Reports"
            progress={{ value: 89.9 }}
            text={'.'}
          />
        </CCol>
      </div>

      <div className="card-box-shadow">
        <SubHeading title="Income Statement" backgroundColor={'#03b1fc'} />

        <br />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div></div>
          <CButton>
            View Report <FiFile />
          </CButton>
        </div>

        <br />
        <br />

        <div style={{ textAlign: 'center' }}>No data to display</div>
        <br />
        <br />
        <br />
      </div>

      <br />
      <br />

      {/*Third part */}
      <div className="card-box-shadow">
        <SubHeading title="Operating Profit Margin" backgroundColor={'#03b1fc'} />

        <br />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div></div>
          <CButton>
            View Trend <FiBarChart />
          </CButton>
        </div>

        <br />
        <br />

        <div style={{ textAlign: 'center' }}>No data to display</div>
        <br />
        <br />
        <br />
      </div>

      <br />
      <br />

      {/**Heh */}
      <div className="card-box-shadow">
        <SubHeading title="Expense and Income" backgroundColor={'#03b1fc'} />
        <div>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Expense',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default FinancialsScreen
