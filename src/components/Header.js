 import Link from './Link'

 const Header = ({ paths }) => {
  return (
    <div className="header">
      <div className='linkList'>
        {paths.map((item, i) =>
         <Link key={i}>{item}</Link>
        )}
      </div>
    </div>
  )
 }

 export default Header