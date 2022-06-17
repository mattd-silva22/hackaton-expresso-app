import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 13rem;
  

 
  border-radius: 0px 0px 8px 8px;

  //background-color: rgba(230, 230, 230, 0.2);
  background-color: #0B7675;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  width: 90%;
  max-width: 1920px;

  @media (max-width: 1080px) {
    flex-direction: row;
  }

  .header-nav {
    display: flex;
    align-items: center;

    @media (max-width: 1080px) {
      display: none;
    }

    ul {
      display: flex;
      list-style: none;
      gap: 2.2rem;
    }

    .header-nav-li {
      .header-nav-link {
        padding: 0.2rem;
        text-decoration: none;
        color: #000;
        font-weight: 400;

        &.home {
          font-weight: 700;
        }
      }
    }
  }

  .buy-book-btn {
    background-color: var(--primary-light);
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;

    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    text-decoration: none;
  }

  #ham-btn {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    display: none;
    .ham-btn-bar {
      width: 3.2rem;
      height: 2px;
      background-color: #165bd4;
      transition: 0.4s;
    }

    @media (max-width: 1080px) {
      display: flex;
    }
  }

  .active {
    .ham-btn-bar:nth-child(1) {
      -webkit-transform: rotate(-45deg) translate(-8px, 8px);
      transform: rotate(-45deg) translate(-3px, 2.5px);
    }

    .ham-btn-bar:nth-child(2) {
      opacity: 0;
    }

    .ham-btn-bar:nth-child(3) {
      -webkit-transform: rotate(45deg) translate(-9px, -9px);
      transform: rotate(45deg) translate(-9px, -8px);
    }
  }
`
export const RespNavbar = styled.div`
  #nav-resp.active {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      gap: 2rem;

      font-weight: 400;

      list-style: none;
      height: 100vh;

      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 4rem;

        &:hover {
          background-color: var(--blue-primary);
        }
      }

      .header-nav-link {
        color: #000;

        text-align: center;

        a {
          text-decoration: none;
        }
      }

      li a {
        font-size: 3rem;
        text-decoration: none;

        &.link-btn {
          color: #000;
        }
      }
    }
  }

  .navtop-link {
    font-size: 2rem;
    color: honeydew;
    text-decoration: none;
    text-transform: capitalize;
    padding: 5px;

    &:hover {
      color: var(--yellow);
    }
  }

  #nav-resp {
    display: none;
  }
`
