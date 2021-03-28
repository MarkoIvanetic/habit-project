import { styled } from '@material-ui/core/styles'
import { LinearProgress as MuiLinearProgress } from '@material-ui/core'

const LinearProgress = styled(MuiLinearProgress)(
    ({ theme }) => ({
        position: 'absolute',
        bottom: '0',
        width: '100%'
    }),
    { name: 'HbtTableCell' }
)

export { LinearProgress }
