import styled from '@emotion/styled'

export const StyledTable = styled.div`
    margin: 1em 2em 0 0;
    table {
        border-color: #d3d6ed;
        border-width: 5px;
        width: 100%;
        .centered {
            text-align: center;
        }
        th {
            border: 1px solid #d3d6ed;
            padding: 0.5em;
        }
        td {
            border: 1px solid #d3d6ed;
            padding: 0.5em;
        }
    }
`