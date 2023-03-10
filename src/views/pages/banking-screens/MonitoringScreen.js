import React from 'react'
import { CChartBar } from '@coreui/react-chartjs'
import { CButton, CCard, CCardBody } from '@coreui/react'
import SubHeading from 'src/components/SubHeading'
import '../../../index.css'

function MonitoringScreen() {
  return (
    <div>
      <h4 style={{ textAlign: 'center', backgroundColor: '', padding: '5px', borderRadius: '5px' }}>
        High Value Transactions
      </h4>
      <h5 style={{ textAlign: 'center' }}>Daily Deposit and Withdrawals Trend</h5>

      <div>
        <CCardBody>
          <CChartBar
            data={{
              labels: ['25-DEC', '27-DEC', '28-DEC', '29-DEC', '30-DEC', '31-DEC'],
              datasets: [
                {
                  label: 'DEPOSITS',
                  backgroundColor: '#03b1fc',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
              ],
            }}
            labels="months"
          />
        </CCardBody>

        <CButton color="info" style={{ color: 'white' }}>
          Click for Details
        </CButton>
      </div>

      <br />
      <br />
      <br />

      <div className="card-box-shadow">
        <SubHeading title="Weekly Deposits and Withdrawal Trends" backgroundColor={'#03b1fc'} />

        <br />
        <br />
        <br />
        <div style={{ fontSize: '11px', textAlign: 'center' }}>No data to display</div>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />

      <div className="card-box-shadow">
        {/* <h4 style={{ textAlign: 'center' }}>Monthly Deposits and Withdrawal Trends</h4> */}
        <SubHeading title="Monthly Deposits and Withdrawal Trends" backgroundColor={'#03b1fc'} />
        <br />
        <br />
        <br />
        <div style={{ fontSize: '11px', textAlign: 'center' }}>No data to display</div>
        <br />
        <br />
        <br />
      </div>

      <br />
      <br />
      <div className="card-box-shadow">
        {/* <h4 style={{ textAlign: 'center' }}>Monthly Deposits and Withdrawal Trends</h4> */}
        <SubHeading title="Suspicious Customer Activities" backgroundColor={'#03b1fc'} />
        <br />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{}}>Above Sum Per Month</div>
          <div style={{}}>Above Number Per Month</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{}}>Deposits and Withd. Count Thread</div>
          <div style={{}}>Deposits and Withd. Count Thread</div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <br />
      <br />

      <div className="card-box-shadow">
        {/* <h4 style={{ textAlign: 'center' }}>Monthly Deposits and Withdrawal Trends</h4> */}
        <SubHeading title="Transactions on Risk Acccount" backgroundColor={'#03b1fc'} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{}}>Grouped by Transaction types</div>
        </div>
        <br />
        <br />
      </div>

      <br />
      <br />
    </div>
  )
}

export default MonitoringScreen
