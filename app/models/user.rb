class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :friends
  has_many :posts

  serialize :liked_friends, Array
  def self.random_friend(ids)
    ids = ids.length > 0 ? ids : [0]
    Friend.where("id NOT IN (?)", ids).order("RANDOM()")
  end 
end
