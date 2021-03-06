/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react'
import sproutIcon from '@iconify/icons-mdi/sprout'

export default () => (
  <Link
    to="/"
    sx={{
      height: 32,
    }}>
    <Icon icon={sproutIcon} color="#354F59" />
  </Link>
)
