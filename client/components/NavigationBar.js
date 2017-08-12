import React from 'react';
import { Link } from 'react-router';

export default () => {
  //base64 image
  const imgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAABECAYAAAA1ISGwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACu5JREFUeNrsXf1x2zoMl3L9v3obaIOoE1SdoM4EUSaoO0GdCZxOoGQCJxPIbwK5E8idQO4EfuIrmCAIP0BZip0IuNPlIooiCeBHEh+U4+jEaL/fF92fz92Vwq1Ndz3EcbyOhISmSB0oku6q93YqhUtCAgwBiJDQIziWez7NhGNCUwJHGwCOlXBMaCrAyPZh1ArXhF6Dzk6gD8nIzwsJvdmVIw1cOWrhmtAkVo44jrfR31gGl9YiNqEprR4zrr2hVhrhmNDUAFIywFEIp4SmCpC5xa2rAoS5cEhoilsqHB2vACQ5XJlwSWiKwCgcWygBhdBkgZF4IuONcEloquDIGQa4BPyEjkZnJ96/VEQkNMWVI5McKqG3ag8s1L5f7/8hDpEM3E7lAMdCJCF0isCoHRHqbOC2KjnUJHSKFBsUVs3YPxx11nEcfxkAGOrQ0jd061/4e9+9fyOiETrFlYNz8Cg9FBhyiOlN6kbeR/awRS8ObDuF96THZACHctTZFUS0k4A2qjFAJ/QqurHoWa8aAJj7o6YRMcGxtOQ/JQeCI7PYJc4ZSzsQAsdZuOwnTrueWS7v48DQdXvKLutrE3LGOqajhCHjQcBxiGwiWAl8aeONDTTMNkpfRJx4y3DbL7xmsHKxDXmUtlJZtgCmdhcuhiIPH92WNj6FAoGVhrq174MSIGiTzFY+RTLktWEepwOuHJVJN0AODaf9Q8Dh4G8TtN2D2cdld7jyoSr0jjzAS/XoBSPeshZWqQVctc1rhgBXMoHxbKUj7Tbcdg08a1C9JRK+cWWF/rQo6VLXxcIsLWNZEjAs0FbXOWEhfmll1HUrdH82xraKyN8l49mh4CCyqYls2tBdj36hCdGFZ+u1IqtCbZjl9bsbnX1LyjVzSosyzaAvrWF2KT3KVDj6VaMto6nduenAFckRmzsM0hdHfFEgtDUJHd69Mik56k9tmeVTNKaFBVQry1hzNKaMKjlSMH3lgeCoAmSc9QUH8KA1AR3xt+x1/BqljedklrVtvUpfzIKsGI1FeUtGv2zbotLSrgsYBWdbaOofaq9geGyeKSriRcbc6uYEkA1jq9dgZ4eLd5YZt2bYowsuOBAPVyEy7gmOilOHK0Nuo6bg3QIpwJ6cz8iQYFe2jyWA4racJQ4NKPUBxAWMHu3qcSdwsT0xesUkq8aSOQPi8cy5wkRu87mPbw5AZ0Ntq5D8g2QcCg7KM4Y+t1QfP/QBRxzHu+7PF2CwujbqHjDRFECsoRPX3Z9ruKeY8508p+qv1d/uWV83fsNf1f6W9O8K6hfQR8VQFVj8An2PDO3eWsoo3cH7MnKPQ/fdpd3eepl/YPB729VZQ7uKPsPfLUNZ9Ji+dtcN9HsDH7bg9PcH9HWowKx6130ArwsY9xYrM+E/5dc6ekpa/c0E1Abxtz84sNBwp1Vku+vIBTBUde62u/6gRs+7Z9TMc+F4bU476aE8MnyRBACigbFzAIOCzUdb5j0T/UFgxILktpujiUVRn9hBFjG/4ALyHMNz+yvweToBZp6xx4hXPyJ3xoeVPgw96o6h9zDjYJSfg0CvmbPVz4Amtzb7AAFDta22L1eO93xktpdYhBdCm8AJgIJXgzwkjWc3kIg/DvCO8wPrbxhj1yvd9wFXveMR3pMzYxULjleK4cXaB7SL98FJSOoLsTn+388H8ObxeWRz5Ix6GfYohUarsZ3RQz6pweYIse+WyJ4dzeZA/C2OofQzaDzjKIDNJWpwgVYBcQwrQJCDILhd6kly1J0TRTsEHCnX/YgcCOkA4AiVz8rhrVoy39ELHIHewMWrHZPA7l8yyIYApiKuTRyIm3tcjHtDINDnlbK5efc+gCDff0t8/9iXnntWskfX6yHgIAK1xSrwirk0eY56gAO7htl8MkwotUsZDYHovuDIfUctsM6MDQp6FqSleVik0y8UkgQga/SZnhmJ6hYhwHABBClZY/g8UOFqF7XdovcUUHeOZq+GgOogcJCxaD7rSQlH5kubWzUUHAbFZfHJEiHH2QgmGeO4WS9wEL3Q7zPJhh8hPwAcS0suVgkdKcisZ0xXR7Nea4nCpxZffh3oPy+xApDZ1tuuYY+7cow/8Sl7KDiQ8E25bo0lKnwQOAyrEkc+L9p05KI9i40dCg4E6MoiG2vOXNx3hQB/tWaCOgC1BgbkBg9WTBUJYh+6Uxfg5TIujdgDYXLHovjKFdN/HsFW41f3/C0o3TW4mdntOnjjddXqGBHXlet7Hnig+bmzHRiDce24B8rg+a0tLsKUT87o04t3IF5uwduWhciir2wOWR0yy0xV2VLRHTPtnCSb1cf4mJucWRcaSpFcP2xZGZbJBcNgOuqX1AUcQib6EKhEeeQI20PZp+hvyP9xu+V4/tJwL4H6oqxCpwUOgz2xASXfeYChFTvCe3cPpSKCQVdAvXdXtsltYF2fTVOAHmxPZKwZ2EK7sfr6gXpEor9fBKHW+w6SBr1GXGCHHiJzGsVrC2B9hDaxkHMwOJ8l5EHZDPrGKcvpOMBjlUWGr7rgMpB5HjHyrgBIM0ufXWUv+mwz+KFvW8jv0vU2yHGjHCrXvv727auiM/RgCR6fxLIiLGEbtPMoGZu6ztxEKA8L6F4DFQz20VcX9amh0Jl2IGCoyWgF/FWZtg0KnC2hLDKUlaQMH3hSfy91LCF6+vzRErmuddlXKCtBvpFnC5zCrKw9jefQdoZm7MoynoVlPDndQcB7lC5uoc+6b5fEXZ9Zzp4f1FcqJO7Pju0d/u3eH3xDPu2lxe+9jN4ZgbeuISku+kx3ZigrwOGRG1Jj5uSYbKWPvpI2VyhYR8sqj/OkQsHOhDhVGst4dJlrPM9OEsJ9nRNXGOIjCxQ3q3H8bIi+mlaOkJRe9cIvaMZXK4madT/1/Rgb1FPvnVtWrvk7BIhazu/wUg5bhsRSdgtbIKVID6TsJno6H4Ltua/IxV7pe/D3hjzPyYRW9W5J22vQgdzQZ11mG49pxVArnT5ekBr6dYPqfXes+n37+sLmCJnxZ92LLqLhf9XVp/wKID9PxSAcgLZoW4OdIXpy+Ggoixxlpu3uHbETtW3zFdrZ9XCO/DHc2znq72Csnx1jNQHjmZPH8P/GAK6U4fBJPH19WjlO4Tcw0IlCzmz7XkhNLjOUUqPtugRNBjNSpmfIAp8nB5vhpwEYl2DU6lnxGyiVcoSsUBJkDruHseyuexirbTyXFmDcg62UoXor5MzBZSmUZYi/GcnbK6OAsx1nfUPxAxN31no3P2ajjxqDkan2ui0o8AYpxg8oU5dKv9DHipWXpkRlv6j7HLYaD2CENqA4Kr1mDduwBzBCawDX1VirMhqrbTyZARh6u30FQK6h3gPaBumyBgzvO5KGdAFbywb9pMVV6MzdBBjk1dDMQ4eG5KeWn4zOhaMsj4RGpzM0E3HpbqSZ5d7zGOcZIaFRZquK48Yd2bXZTn3V0Mapbby+b/wKjSMQV47+q8QaACCV6VwCOgu9Qp+vFCURGs8uNCioDtXrL0Soz6jcvqYLleTxa29M5vD6fJcfvBGa2mpWMA31VoxUoSkBw2eDHP0ciJDQscCx2oeT/NCm0Hg2x6msGtHfgE8f+udEAptCb5zOTrRfh2yPxIMl9K7BIca1kIDDQlsRjZCAw0yHxCzE3hB63xSYDLkP+VK6kNBbB8e8BzgK4ZzQVABSSYxDSMgMDl8ypABDaPIgyS0R85XkVAkJPV9NEuGE0Nj0nwADAM4+xZHb7QNtAAAAAElFTkSuQmCC"

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/"><img src={imgBase64} className="img-responsive" alt="Exponential-e"  style={{maxHeight: "100%"}}/></Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/product-info">Dashboard</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                    <form className="navbar-form navbar-right">
                        <input type="text" className="form-control" placeholder="Search..."/>
                    </form>
                </div>
            </div>
        </nav>
      </div>
  );
}
