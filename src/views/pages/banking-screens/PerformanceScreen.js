import React from 'react'
import { FiFilePlus, FiList } from 'react-icons/fi'
import CardComponent from 'src/components/CardComponent'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CWidgetStatsB } from '@coreui/react'
import { FiChevronDown, FiChevronUp } from '../../../../node_modules/react-icons/fi/index.esm'
import SubHeading from 'src/components/SubHeading'

function PerformanceScreen() {
  return (
    <div>
      <div className="card-box-shadow">
        <SubHeading
          title="PC CODE: 1000 - MD YUSUFU ABDUL - YUSUFU ABDUL SILLA"
          backgroundColor={'#03b1fc'}
        />

        <br />

        <SubHeading title="Parameters" backgroundColor={'#03b1fc'} />

        <div style={{ display: 'flex' }}>
          <CardComponent
            icon={<FiFilePlus size={35} color={'#03b1fc'} />}
            title={'KPI'}
            width={'350px'}
            margin={5}
          />
          <CardComponent
            icon={<FiFilePlus size={35} color={'#03b1fc'} />}
            title={'Time Option'}
            description={'MONTHLY'}
            width={'350px'}
            margin={5}
          />
        </div>

        <div>
          <CardComponent
            icon={<FiFilePlus size={35} color={'#03b1fc'} />}
            title={'Pivot Date'}
            description={'31-DEC-22'}
            width={'350px'}
            margin={5}
          />
        </div>
      </div>

      <br />
      <br />

      <div className="card-box-shadow">
        <SubHeading title="Parameters" backgroundColor={'#03b1fc'} />
        <br />
        <br />

        {/* <div style={{ display: 'flex' }}> */}
        <CCol style={{ marginRight: '10px' }}>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="success"
            inverse
            value="Income"
            title="Monitor the bank's income "
            progress={{ value: 89.9 }}
            text={
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      marginRight: '5px',
                      padding: '5px',
                      borderRadius: '5px',
                      textAlign: 'center',
                    }}
                  >
                    <div>Against Budget</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>Budget</div>
                      <div>1.26B</div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <FiChevronDown size={20} color={'red'} />
                      </div>
                      <div>1.26B</div>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      borderRadius: '5px',
                      textAlign: 'center',
                    }}
                  >
                    Against Previous Budget
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>Previous</div>
                      <div>0</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <FiChevronUp size={20} color={'green'} />
                      </div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                  <div></div>
                  <h5>Details</h5>
                </div>
              </div>
            }
          />
        </CCol>

        <CCol style={{ marginRight: '10px' }}>
          <CWidgetStatsB
            className="mb-4 w-100 h-96 "
            color="danger"
            inverse
            value="Expense"
            title="Monitor the bank's income "
            progress={{ value: 89.9 }}
            text={
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      marginRight: '5px',
                      padding: '5px',
                      borderRadius: '5px',
                      textAlign: 'center',
                    }}
                  >
                    <div>Against Budget</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>Budget</div>
                      <div>1.26B</div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <FiChevronDown size={20} color={'red'} />
                      </div>
                      <div>1.26B</div>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: '5px',
                      borderRadius: '5px',
                      textAlign: 'center',
                    }}
                  >
                    Against Previous Budget
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>Previous</div>
                      <div>0</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <FiChevronUp size={20} color={'green'} />
                      </div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                  <div></div>
                  <h5>Details</h5>
                </div>
              </div>
            }
          />
        </CCol>
      </div>
    </div>
    // </div>
  )
}

export default PerformanceScreen
