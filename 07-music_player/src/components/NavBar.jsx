import styles from './NavBar.module.css'

function NavBar() {
	return (
		<nav className={`navbar navbar-expand-sm ${styles.navbar}`}>
			<div className="container">
				<a className={`navbar-brand ${styles.brand}`} href="/">
					Music Player
				</a>

				<div className="navbar-nav ms-auto">
					<a className={`nav-link ${styles.link}`} href="all-songs">
						All Songs
					</a>
					<a className={`nav-link ${styles.link}`} href="playlists">
						Playlists
					</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
