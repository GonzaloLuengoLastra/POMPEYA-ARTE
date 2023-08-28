import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Header (){

  const navigate = useNavigate();
  const cerrarSesion = (val) =>{
    Swal.fire({
      title: 'Cerrar Sesión',
      text: "¿Desea cerrar la sesión?",
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Lo esperamos!', '', 'success')
        navigate('/Login')
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'info')
      }
    })
}

    return (
      <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Dahsboard</a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
      <li className="nav-item">
        <button onClick={cerrarSesion} className="nav-link" data-widget="" role="button">
        <i class="fa-sharp fa-solid fa-lock"></i>
        </button>
      </li>
    </ul>
  </nav>
</div>

    );
  }
