import styled from "styled-components";

export const StyledDialogContent = styled.div`
    p{
        font-size: x-small;
    }
    article {
        p:first-of-type{
            margin-top: 2rem;
        }
        p{
            font-size: small;
            padding: 8px 0;
        }
        p:last-of-type{
            color: var(--gray-500-color);
        }
    }
    hr{
        margin: 1rem 0;
    }
    .rate__input{
        height: 35px;
        width: 10rem;
        text-align: right;
        &:focus-within,
        &:hover {
            outline: none;
        }
    }
    .rate__input::placeholder{
        text-align: right;
    }
    .fee__input{
        background-color: var(--gray-300-color);
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    }
    div{
        button{
            margin-top: 20px ;
            margin-bottom: -20px ;
            background-color: green;
            text-transform: capitalize;
            font-weight: bold;
        }
        button:first-of-type{
            color: var(--primary-color);
            box-shadow: none;
            background: none;
        }
        button:last-of-type{
            background-color: var(--primary-color);
            border-radius: 30px;
        }
    }
`
export const dialogStyle = {
    borderRadius: '15px',
    padding: '1.5rem',
    minWidth: '50vw'
};
export const question_icon_style = {
    borderRadius: '50%',
    fontSize: '.8rem',
    margin: '0 .1rem',
    color: '#fff',
    backgroundColor: '#000'
}
