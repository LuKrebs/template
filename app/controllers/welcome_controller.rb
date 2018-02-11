require 'open-uri'
require 'json'

class WelcomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :about, :contact, :work, :booking, :confirm]

  def index
    if request.xhr?

      arrival = params[:arrival].to_date
      departure = params[:departure].to_date

      @url = {
        url: "https://booking.cafehostel.com.br/en/hqb/drjl9zZq6b/availability?arrival=#{arrival.year}-#{arrival.month}-#{arrival.day}&departure=#{departure.year}-#{departure.month}-#{departure.day}"
      }

      respond_to do |format|
        format.json { render json: @url }
        format.html
      end

      # url = "https://booking.cafehostel.com.br/en/hqb/drjl9zZq6b/availability?arrival=#{arrival.year}-#{arrival.month}-#{arrival.day}&departure=#{departure.year}-#{departure.month}-#{departure.day}"
      # raw_url = open(url).read
      # html = Nokogiri::HTML(raw_url)
      #
      # even = html.search(".even")
      # odd = html.search(".odd")
      # @images = [
      #   # 11 beds room
      #   ["https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/33308ee8e5b62a25c8f86bdb3822ac88.jpg",
      #    "https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/8d6fcc652d69180b0fa8af317aa18f65.jpg",
      #    "https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/2b17e62ef7cb281560c15c51b85d2b47.jpg"],
      #   # 9 beds room
      #    ['https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/7ad64e499dc4b607fe16c10f45e9b092.jpg',
      #     'https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/e5fbf80d4d2a964217e61f0f081b5583.jpg'],
      #   # Private room
      #    ['https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/7b22ef0ed94fd70367531a961417dfb4.jpg',
      #     'https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/c5c8eb80b8e6a9851e7347dd89372453.jpg'],
      #   # 6 beds room
      #    ['https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/886ddd858c30cda2afabc0d2acd1c70b.jpg',
      #     'https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/b1c11ea0bfd326549c40e0f3ba752a91.jpg'],
      #   # 4 beds room
      #    ['https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/1e8577dd113310b07d6b3e5554f5f0ae.jpg',
      #     'https://s3-sa-east-1.amazonaws.com/hqbeds.com.br/drjl9zZq6b/7f605e6901ca12d60fa4f394cb7fc189.jpg']
      # ]
      # @names = []
      # @prices = []
      # @units = []
      #
      # even.each do |item|
      #   # @images <<  item.search("img").attribute('src').text
      #   @names << item.search('.col-md-3 h6').text.delete("\n").strip.split("  ")
      #   @prices << item.search(".col-md-5 h6 b").text.delete("\n").strip.split("  ")
      #   if item.search("select").attribute('disabled').nil?
      #     @units << item.search("select").text.delete("\n").strip.split(" ")
      #   else
      #     @units << ["disabled"]
      #   end
      # end
      #
      # odd.each do |item|
      #   # @images <<  item.search("img").attribute('src').text
      #   @names << item.search('.col-md-3 h6').text.delete("\n").strip.split("  ")
      #   @prices << item.search(".col-md-5 h6 b").text.delete("\n").strip.split("  ")
      #   if item.search("select").attribute('disabled').nil?
      #     @units << item.search("select").text.delete("\n").strip.split(" ")
      #   else
      #     @units << ["disabled"]
      #   end
      # end
      #
      # @names.each do |name|
      #   name.map { |n| name.delete(n) if n == "" }
      # end
      #
      # @prices.each do |price|
      #   price.map { |p| price.delete(p) if p == "" }
      # end
      #
      # @result = {
      #   images: @images,
      #   names: @names,
      #   prices: @prices,
      #   units: @units,
      #   arrive: params[:arrival],
      #   departure: params[:departure]
      # }
      #
      # respond_to do |format|
      #   format.json { render json: @result }
      #   format.html
      # end
    end
  end

  def about
    @employees = Employee.all if Employee.all
  end

  def contact
    if request.xhr? && request.method == "POST"
      message = Message.new(
                  name: params['name'],
                  email: params['email'],
                  subject: params['subject'],
                  content: params['message']
                )
      message.save ? status = true : status = false
      @result = {
        status: status
      }
      respond_to do |format|
        format.json { render json: @result }
        format.html
      end

    end
  end

  def booking
  end

  def work
  end

  def confirm
    if request.xhr? && request.method == "POST"
      guest = Guest.new(
                first_name: params['first_name'],
                last_name: params['last_name'],
                email: params['email'],
                phone: params['phone'],
                country: params['country'],
                notes: params['notes'],
                breakfast: params['breakfast'],
                descount_cupom: params['descount_cupom'],
                arrive: params['arrive'],
                departure: params['departure'],
                subtotal_price: params['subtotal_price'],
                breakfast: params['breakfast'],
                breakfast_value: params['breakfast_value'],
                total_price: params['total_price'],
                room: params['room']
              )
      guest.save!
      guest.save ? status = true : status = false
      @result = {
        status: status
      }
      respond_to do |format|
        format.json { render json: @result }
        format.html
      end
    end
  end
end
