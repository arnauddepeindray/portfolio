// ** Icon imports
import Web from 'mdi-material-ui/Web'
import Table from 'mdi-material-ui/Table'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CompetenceIcon from 'mdi-material-ui/BookEdit'
import ExperienceIcon from 'mdi-material-ui/HumanEdit'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },

    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Mon portfolio',
      icon: Web,
      path: '/',
      openInNewTab: false
    },
    {
      title: 'Mes projets',
      icon: Table,
      path: '/admin/projets/',
      openInNewTab: false
    },
    {
      title: 'Mes experiences',
      icon: ExperienceIcon,
      path: '/admin/experiences/',
      openInNewTab: false
    },

    {
      title: 'Mes compétences',
      icon: CompetenceIcon,
      path: '/admin/skills/',
      openInNewTab: false
    },
    
  ]
}

export default navigation
