// import pdex from './image/pdex.png'

function Profilepage() {
    return (
        <div class="profilepage">
            <div class="profilepicture">
                <img alt="logo pdex" /> {/* source={pdex} */}
            </div>

            <div>
                <a href="/" className="editprofile">Edit my profile</a>
            </div>

            <div>
                <text className="username">Username</text>
                <br></br>
                <text class="followers">followers</text>
                <br></br>
                <text class="following">following</text>
            </div>

            <div>

            </div>
            <a href="/" className="myshares">My shares</a>
            <a href="/" className="reshares">ReShares</a>
            <a href="/" className="liked">Shares liked</a>
        </div>
    )
}

export default Profilepage;