class User < ApplicationRecord
    enum country: {
        brasil: "brasil",
        blank: "blank"
    }
    validates :soccer_team, presence: true
    validates :country, presence: true
    validates :name, length: {minimum:4, maximum:10}
end