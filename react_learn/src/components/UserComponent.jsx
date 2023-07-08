import styles from "./UserComponent.module.css"
const UserComponent = (value) => {
    const {id,name,status,species,gender, image} = value
    return (
        <div className={styles.content}>
            <h1>id: {id}</h1>
            <h2>name:{name}</h2>
            <h3>status: {status}</h3>
            <h3>species: {species}</h3>
            <h3>gender: {gender}</h3>
            <image>{image}</image>
        </div>
    )
}
export default UserComponent