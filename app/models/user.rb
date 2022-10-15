class User < ApplicationRecord
    enum country: {
        brasil: "brasil",
        blank: "blank"
    }
    validates :soccer_team, presence: true
    validates :country, presence: true
end
