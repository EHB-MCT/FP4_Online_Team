import { VoteButton } from "./VoteButton"

export const VoteButtonsWrapper = () => {
    return (
        <>
            <div className="vote-buttons-wrapper">
                <VoteButton 
                    price={"Price 1"}
                />
                <VoteButton 
                    price={"Price 2"}
                />
                <VoteButton 
                    price={"Price 3"}
                />
            </div>
        </>
    )
}