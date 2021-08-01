<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
    $servername = "localhost";
    $dbname = "blogs";
    $username = "root";
    $password = "";

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    $flag = true;
    $ret["data"] = array();
    $err = "";

    $id = isset($_REQUEST["id"]) ? test_input($_REQUEST["id"]) : "";

    if(is_numeric($id)){
        $conn = new mysqli($servername, $username, $password, $dbname);
        if($conn->connect_error){
            $err = "Something went wrong. Please try again." . $conn->connect_error;
            $flag = false;
        }
        else {
            $query = "SELECT * FROM posts WHERE post_id = ?";
            $sql = $conn->prepare($query);
            $sql->bind_param("i", $id);
            $sql->execute();
            $res = $sql->get_result();

            $file = "";

            if($res->num_rows > 0){
                $row = $res->fetch_assoc();
                $row_data = array();
                $file = $row["src_file"];
                $row_data["id"] = $row["post_id"];
                $row_data["title"] = $row["title"];
                $row_data["author"] = $row["author"];
                $row_data["intro"] = $row["intro"];
                $row_data["time"] = $row["post_time"];
                $row_data["view_count"] = $row["view_count"];
                $row_data["votes_count"] = $row["votes_count"];
                // $row_data["tags"] = array();
                $row_data["tags"] = explode(" ", $row["tags"]);
                $ret["data"] = $row_data;

                $q = "UPDATE posts SET view_count = ? WHERE post_id = ?";
                $q = $conn->prepare($q);
                $vc = $row["view_count"]+1;
                $q->bind_param("ii", $vc, $id);
                $q->execute();

                $posts = explode(" ", $row["related_posts"]);
                $ret["data"]["related"] = array();
                foreach($posts as $post_id){
                    $q = "SELECT * FROM posts WHERE post_id = ?";
                    $s = $conn->prepare($q);
                    $s->bind_param("i", $post_id);
                    $s->execute();
                    $r = $s->get_result();

                    if($r->num_rows > 0){
                        $rw = $r->fetch_assoc();
                        $rd = array();
                        $rd["id"] = $rw["post_id"];
                        $rd["title"] = $rw["title"];
                        $rd["author"] = $rw["author"];
                        $rd["intro"] = $rw["intro"];
                        $rd["time"] = $rw["post_time"];
                        $rd["view_count"] = $rw["view_count"];
                        $rd["votes_count"] = $rw["votes_count"];
                        $rd["tags"] = explode(" ", $rw["tags"]);

                        array_push($ret["data"]["related"], $rd);
                    }
                }
            }
            else {
                $err = "Product not found";
                $flag = false;
            }

            $sql->close();

            if(!file_exists($file)){
                $flag = false;
                $err = "File not found";
            }
            else {
                $f = fopen($file, "r");
                if(!$f){
                    $flag = false;
                    $err = "Unable to read file";
                }
                else {
                    $ret["data"]["content"] = fread($f, filesize($file));
                }
            }
        }
        
    }
    else {
        $flag = false;
        $err = "Invalid Request...";
    }

    $ret["status"] = $flag;
    if(!$flag){
        $ret["error"] = $err;
    }

    echo json_encode($ret);
?>

