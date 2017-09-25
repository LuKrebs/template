class Employee < ApplicationRecord
  mount_uploader :photo, PhotoUploader
end
