import styled from '@emotion/styled'

export const StyledTable = styled.div`
    table {
        width: 100%;
        .centered {
            text-align: center;
        }
        th {
            //border: 1px solid #d3d6ed;
            padding: 0.5em;
        }
        td {
            padding: 0.5em;
            max-width: 20em;
            overflow-wrap: anywhere;
        }
    }
`
