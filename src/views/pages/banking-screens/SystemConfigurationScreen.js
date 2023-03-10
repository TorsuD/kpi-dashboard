import React from 'react'
import CardComponent from 'src/components/CardComponent'
import { CWidgetStatsB } from '@coreui/react'
import {
  FiCommand,
  FiCopy,
  FiFile,
  FiFolder,
  FiList,
  FiUserPlus,
} from '../../../../node_modules/react-icons/fi/index.esm'

function SystemConfigurationScreen() {
  return (
    <div>
      <h4>Home</h4>

      <div
        style={{
          textAlign: 'center',
          overflowX: 'scroll',
        }}
      >
        <CWidgetStatsB
          className="mb-4 m w-100 h-96 mr-2"
          color="primary"
          inverse
          value={<FiUserPlus size={25} color={'white'} />}
          title="User Management"
          // progress={{ value: 100 }}
          text="Create Dashboard Users and assign KPI Access"
        />

        <CWidgetStatsB
          className="mb-4 m w-100 h-96 mr-2"
          color="secondary"
          inverse
          value={<FiCommand size={25} color={'white'} />}
          title="System Setup"
          // progress={{ value: 100 }}
          text="Create basic system setups"
        />

        <CWidgetStatsB
          className="mb-4 m w-100 h-96 mr-2"
          color="warning"
          inverse
          value={<FiCopy size={25} color={'white'} />}
          title="EOD Process"
          // progress={{ value: 100 }}
          text="Monitor MIS EOD Process"
        />

        <CWidgetStatsB
          className="mb-4 m w-100 h-96 mr-2"
          color="danger"
          inverse
          value={<FiFile size={25} color={'white'} />}
          title="MAP ARM"
          // progress={{ value: 100 }}
          text="Map MIS ARM Codes to Bank ARM Codes"
        />

        <CWidgetStatsB
          className="mb-4 m w-100 h-96 mr-2"
          color="info"
          inverse
          value={<FiList size={25} color={'white'} />}
          title="KPIs"
          // progress={{ value: 100 }}
          text="Assign KPIs"
        />

        <CWidgetStatsB
          className="mb-4 m w-100 h-96 mr-2"
          color="success"
          inverse
          value={<FiFolder size={25} color={'white'} />}
          title="EOD Alert Receivers."
          // progress={{ value: 100 }}
          text="EOD Alert Receivers Creation and Editing"
        />
      </div>
    </div>
  )
}

export default SystemConfigurationScreen
